import axios from "axios"
export const fetch = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data)
    .catch(error => console.error('Error fetching data:', error));
    return res;
}
export function getPostalAddress() {
    return fetch().then(users => {
        return users.map((user: { address: string}) => {
            return user.address;
        });
});
}