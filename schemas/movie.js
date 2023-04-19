import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backdrop_poster',
      title: 'Large Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'director',
      title: 'Directed By',
      type: 'string',
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'string',
    }),
    defineField({
      name: 'original_language',
      title: 'original language',
      type: 'string',
      initialValue: 'en',
    }),
    defineField({
      name: 'adult',
      title: 'adult',
      initialValue: false,
      type: 'boolean',
    }),
    defineField({
      name: 'selected_seat',
      title: 'selected seat',
      initialValue: [],
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
