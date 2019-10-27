export default {
    Query: {
        getState: (parent, {state_id}, {models}) => models.State.findOne({where: {state_id} }),
        allStates: (parent, args, {models}) => models.State.findAll()

    },

    Mutation: {
        createState: (parent, args, {models}) => models.State.create(args),
    },
};