const Path = require('path');
const Slugify = require('slugify');
const Models = require('../models/');
module.exports = {

    create: async (request, h) => {
        const note = await Models.Note

            .create({
                date: new Date(),
                title: request.payload.noteTitle,
                slug: Slugify(request.payload.noteTitle, { lower: true }),
                description: request.payload.noteDescription,
                content: request.payload.noteContent,
            });
        return { note }
    },

    read: async (request, h) => {
        const note = await Models.Note.findOne({
            where: { slug: request.params.slug },
        });
        return { note };
    },

};