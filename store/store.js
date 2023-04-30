import { create } from "zustand";
import { request } from "../FuncsAndHooks/axios";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";


const useStore = create((set) => ({
    members: [],
    setMembers: (list)=> set(state => state.members = [...new Set(list)]),
    fetchMembers: async() => {
        try {
            let adminId = await getUserNsend()
            const response = await request.get("/allshares", {headers: { userId: adminId._id }})
            set(state => state.members = [...new Set(response.data)])
            console.log('fetched...')
            return response
        } catch (error) {
            return error
        }
    },
}))

export default useStore;
