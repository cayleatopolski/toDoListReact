import React from "react";

const TodoItem = () => {
  return (
    <section className="listContainer">
      <div className="listItems">
        <h2>Today's todo's</h2>

        <label>
          <input type="checkbox" name="item1"></input>
          Work on React tutorial.
        </label>

        <label>
          <input type="checkbox" name="item2"></input>
          Play Pocket Camp.
        </label>

        <label>
          <input type="checkbox" name="item3"></input>
          Eat dinner.
        </label>
      </div>
    </section>
  );
};

export default TodoItem;
