import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// AtomFamily to store user data
export const userAtom = atomFamily({
  key: "userAtom",
  default: selectorFamily({
    key: "userSelector",
    get: (id) => async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${id}`);
        return response.data; // Return user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Handle errors
      }
    },
  }),
});
