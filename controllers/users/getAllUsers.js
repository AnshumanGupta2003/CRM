import usersModel from "../../models/usersModel";
import { successResponse, errorResponse } from "../../utils/responseHandlers";

const getAllUsers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      order = "desc",
      filter = "",
    } = req.query;

    const matchStage = {};

    if (search) {
      matchStage.$or = [
        { username: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { profileName: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
      ];
    }

    if (filter == "status") {
      matchStage.status = filter;
    } else if (filter == "role") {
      matchStage.role = filter;
    }

    const pipeline = [
      { $match: matchStage },
      {
        $sort: {
          [sortBy]: order === "asc" ? 1 : -1,
        },
      },
      { $skip: (page - 1) * limit },
      { $limit: parseInt(limit) },
    ];

    const users = await usersModel.aggregate(pipeline);

    return successResponse(res, 200, "Users retrieved successfully", users);
  } catch (error) {
    return errorResponse(
      res,
      500,
      "An error occurred while retrieving users",
      error
    );
  }
};
export default getAllUsers;
