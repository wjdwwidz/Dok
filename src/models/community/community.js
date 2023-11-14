const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const userCommunitySchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    community_name: {
      type: String,
      required: true,
    },
    user_community_post_text: {
        type: String,
        required: true,
    },
    community_post_img: {
        type: Array,
    },
    community_post_comment : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at : { 
        type:Date
    },
    updated_at : {
        type:Date
    },
    deleted_at : {
        type:Date
    },
  }, { timestamps: {createdAt: 'created_at'} });
  
  

const community = model('Community', CommunitySchema);

module.exports = community;


// Table user_community_post{
//     // user Ref
//     // community_name char
//     // user_community_post_text char
//     // community_post_img Array
//     // community_post_comment Ref
//     created_at timestamp
//     updated_at timestamp
//     deleted_at timestamp
//   }
  