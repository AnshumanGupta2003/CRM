import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const getAllAdmins = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      order = "desc",
      filter = "",
    } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    let matchStage = {};

    if (search) {
      matchStage.$or = [
        { username: { $regex: search, $options: "i" } },
        { profileName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
      ];
    }

    if (filter) {
      matchStage.status = filter; // example filter
    }

    const pipeline = [
      { $match: matchStage },
      {
        $sort: {
          [sortBy]: order === "asc" ? 1 : -1,
        },
      },
      { $skip: skip },
      { $limit: limitNumber },
      {
        $project: {
          __v: 0,
        },
      },
    ];

    const admins = await adminSchema.aggregate(pipeline);

    const totalCount = await adminSchema.countDocuments(matchStage);

    if (!admins || admins.length === 0) {
      return successResponse(res, 200, "No admins found", {
        admins: [],
        total: 0,
        page: pageNumber,
        limit: limitNumber,
      });
    }

    return successResponse(res, 200, "Admins retrieved successfully", {
      admins,
      total: totalCount,
      page: pageNumber,
      limit: limitNumber,
    });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return errorResponse(res, 500, "Failed to fetch admins", {
      error: error.message,
    });
  }
};

export default getAllAdmins;
