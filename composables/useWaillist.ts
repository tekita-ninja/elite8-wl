import { defineStore } from "pinia";
import type { TWaitlistItem } from "~/types/waitlist";
const api = useApi()
export const useWaitlistStore = defineStore("useWaitlistStore", {
  state: () => ({
    loading: false,
    results: <{
      data: TWaitlistItem[],
      meta: {
        total: number
        lastPage: number
        currentPage: number
        perPage: number
      }
    }>{},
    lastNum: <number>0,
  }),
  actions: {
    async get(params?: any) {
      try {
        this.loading = true
        const response = await api({
          url: `${import.meta.env.VITE_BASE_URL}/queue-pools?status=WAITING`,
          params,
        })
        this.results = response.data
      } catch (error: any) {
        return error.response.data
      } finally {
        this.loading = false
      }
    },
  },
});