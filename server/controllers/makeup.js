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
    const { product_category, page, limit } = req.query;
    try{
    const total = await Makeup.countDocuments();
    const skip = (page - 1) * limit;
    let totalPages = Math.ceil(total / limit);

    if (!totalPages) totalPages = 1;

    let obj = { category: { $ne: null } }
    if (product_category){
      obj = { category: product_category }
    }

    const result = await Makeup.find(obj)
      .sort({ id: 'asc' })
      .skip(skip)
      .limit(Number(limit));
    return res.send({
      total,
      page,
      limit,
      totalPages,
      result
    })
  }catch(e){
 console.log(e, '------')
  }
}

  static async getSingleRequests(req, res) {
    const result = await Makeup.find({id: req.params.id})
    return res.send({
      result
    })

  }

}
