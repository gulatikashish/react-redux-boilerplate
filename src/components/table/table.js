import React, { Component } from 'react';
const Table = ({ users }) => {

  const trs = users.map((el) => {
    return (<tr>
      <td>{el.first_name} {el.last_name}</td>
      <td>{el.avatar}</td>
    </tr>)
  })
  return (<table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>avatar</th>
      </tr>
      {trs}
    </tbody>
  </table>);
}
export default Table;