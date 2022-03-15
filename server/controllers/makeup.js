import express from "express";
import Makeup from "../models/makeup";

export default class Phones {
  /**
   *
   *
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object}
   * @memberof Phones
   */
  static async getRequests(req, res) {
    const { page, limit, product_category } = req.query;

    const total = await Makeup.countDocuments();
    let totalPages = Math.ceil(total / limit);

    if (!totalPages) totalPages = 1;
    const skip = (page - 1) * limit;
    let obj = {};
    let sortingBy = { id: 1 };
    if (product_category) {
      obj = { $text: { $search: product_category } };
      sortingBy = { score: { $meta: "textScore" } };
    }
    

    const result = await Makeup.find()
      .sort(sortingBy)
      .skip(skip)
      .limit(Number(limit));
    return res.json({
      total,
      totalPages,
      limit,
      page,
    });
  }
}
