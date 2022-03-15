import { Schema, model } from "mongoose";


const ProductColorchema = new Schema({ hex_value: String, colour_name: String });

const MakeupSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    brand: {
      type: String,
    },
    currency: {
      type: String,
    },

    price: {
      type: Number,
    },

    price_sign: {
      type: String,
    },

    currency: {
      type: String,
    },

    image_link: {
      type: String,
    },
    product_link: {
      type: String,
    },

    website_link: {
      type: String,
    },
    
    product_link: {
      type: String,
    },
    
    description: {
      type: String,
    },
    
    rating: {
      type: String,
    }, 

    category: {
      type: String,
    },
    
    product_type: {
      type: String,
    },

    product_api_url: {
      type: String,
    },
    api_featured_image: {
      type: String,
    },
    product_type: {
      type: String,
    },

    tag_list: {
      type: [String]
    },

    product_colors: {
      type: [{ hex_value: String, colour_name: String }]
    }
  },
  {
    timestamps: true,
  }
);

MakeupSchema.index({
  category: "text",
  brand: "text",
});

export default model("Makeup", MakeupSchema);
