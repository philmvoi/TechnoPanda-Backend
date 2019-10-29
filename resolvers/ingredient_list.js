// export default {
//     Query: {
//         getIngList: (parent, {ingredient_list_id}, {models}) => models.IngList.findOne({where: {ingredient_list_id} }),
//         allIngList: (parent, args, {models}) => models.IngList.findAll()

//     },

//     Mutation: {
//         createIngList: (parent, args, {models}) => models.IngList.create(args),
//     },
// };