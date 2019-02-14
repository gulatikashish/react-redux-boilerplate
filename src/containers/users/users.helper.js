import SuperFetch from "../../utility/superFetch";

class UserHelper {
  fetchUsers = async token => await SuperFetch.get('api/users?page=2')
    .catch(err => console.log(err))
}

export default new UserHelper();