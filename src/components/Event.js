import React from 'react'

const Event = ({ dispatch, event }) => {
  const id = event.id
  const title = event.title
  const body = event.body
  const handleClickDeleteButton = e => {
    e.preventDefault()
    dispatch({
      type: 'DELETE_EVENT',
      id
    })
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event