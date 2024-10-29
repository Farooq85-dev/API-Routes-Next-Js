import { NextRequest, NextResponse } from "next/server";

interface Item {
  id: number;
  name?: string;
}

const arr: Item[] = [];

// Create
export async function POST(request: NextRequest) {
  try {
    const body: Item = await request.json();
    arr.push(body);
    return NextResponse.json(
      { message: "Item added", item: body },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Read
export async function GET() {
  try {
    return NextResponse.json(arr, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Update
export async function PUT(request: NextRequest) {
  try {
    const body: Item = await request.json();
    const index = arr.findIndex((item) => item.id === body.id);
    if (index !== -1) {
      arr[index] = body;
      return NextResponse.json(
        { message: "Item updated", item: body },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete
export async function DELETE(request: NextRequest) {
  try {
    const body: { id: number } = await request.json();
    const index = arr.findIndex((item) => item.id === body.id);
    if (index !== -1) {
      arr.splice(index, 1);
      return NextResponse.json({ message: "Item deleted" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
