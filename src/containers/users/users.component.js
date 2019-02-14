import React, { Component } from 'react';
import Table from '../../components/table/table'
class Users extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.fetchUsers();
  }
  render() {
    const { users } = this.props

    return (
      <Table users={users} />
    )
  }
}
export default Users;