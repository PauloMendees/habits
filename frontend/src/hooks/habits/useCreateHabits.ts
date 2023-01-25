import { habitService } from "@/service/habits";
import { PostPayload } from "@/service/habits/types";
import { useMutation } from "@tanstack/react-query";

export default function useCreateHabits() {
    const service = async (payload: PostPayload) => habitService().create(payload).then(res => res)
    
    return useMutation(service)
}