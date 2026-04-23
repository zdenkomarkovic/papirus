import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategorija",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naziv",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
});
