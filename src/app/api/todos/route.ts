import { NextResponse } from "next/server";

// Dummy data store (in a real app, this would be a database)
let todos = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build an app", completed: false },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newTodo = {
    id: todos.length + 1,
    title: data.title,
    completed: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const index = todos.findIndex((todo) => todo.id === data.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...data };
    return NextResponse.json(todos[index]);
  }
  return NextResponse.json({ error: "Todo not found" }, { status: 404 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const index = todos.findIndex((todo) => todo.id === Number(id));
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1)[0];
    return NextResponse.json(deletedTodo);
  }
  return NextResponse.json({ error: "Todo not found" }, { status: 404 });
}
