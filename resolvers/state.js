
export default {
    Query: {
        getState: (parent, {state_id}, {models}) => models.State.findOne({where: {state_id} }),
        allStates: (parent, args, {models}) =>  models.State.findAll(),
        // allState(parent, args, {models}) {  return await models.State.findAll()}


    },

    Mutation: {
        createState: (parent, args, {models}) => models.State.create(args),
        async updateState(_, { state_id, state_name }, {models}) {
            const state = await models.State.findByPk(state_id);
            await state.update({
                state_name,
            });
                return state;
            },

    }

};
    
    
