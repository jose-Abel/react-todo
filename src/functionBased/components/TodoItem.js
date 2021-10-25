import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState();

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const {
    handleChangeProps, deleteTodoProps, setUpdate, todo: { completed, id, title },
  } = props;

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={() => handleChangeProps(id)}
          checked={completed}
        />
        <button
          type="button"
          onClick={() => deleteTodoProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.defaultProps = {
  todo: PropTypes.arrayOf.isRequired,
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
