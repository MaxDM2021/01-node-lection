// node todo.js add <title>
// node todo.js remove <id>
// node todo.js list

const { addTodo, removeTodo, listTodo } = require("./db/db");

async function invokeAction({ action, title, id }) {
  switch (action) {
    case "add":
      console.log("invoke add");
      await addTodo(title);
      break;
    case "remove":
      console.log("invoke remove");
      await removeTodo(id);
      break;
    case "list":
      console.log("invoke list");
      const todos = await listTodo();
      console.table(todos)
      break;

    default: throw new Error(`uknown action, got: ${action}`);
  }
}

// invokAction({ action: "add", title: "some todo" + new Date })
// invokAction({ action: "remove", id: "h46bxy91hHl0CCOuyyXpX" })
// invokAction({ action: "list" })

const [, , action] = process.argv;

switch(action) {
    case "add":
        const [, , , ...title] = process.argv;
        invokeAction({ action, title: title.join(" ") });
        break;

        case "remove":
            const [, , , id] = process.argv;
            invokeAction({ action, id});
            break;


            case "list":
                invokeAction({ action });
                break;
                default:
                break;


}
