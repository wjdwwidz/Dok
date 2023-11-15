const { Schema } = require('mongoose');

const CategorySchema = new Schema(
    {
        user :{
            type: Schema.Types.ObjectId,
          ref: 'user',
          required: true,
        },
        user_dog :{
            type: Schema.Types.ObjectId,
          ref: 'user',
          required: true,
        },

    }

    
);

module.exports = CategorySchema;
