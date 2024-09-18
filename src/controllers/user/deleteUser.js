import { remove } from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    try {
        const { id } = parseInt(req.params)
        const userRemoved = await remove(id) 

        return res.json({
            message: "Usuário removido com sucesso!", 
            user
        })

    } catch (error) {

        console.log(error)
        
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Usuário não encontrado"
            })
        next(error)
    }
}

export default deleteUser