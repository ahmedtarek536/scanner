const data = {
  name: "exmple_directory",
  type: "directory",
  contents: [
    {
      name: "subdir1",
      type: "directory",
      contents: [
        { name: "file1.txt", type: "file", size: 100 },
        { name: "file1.txt", type: "file", size: 200 },
      ],
    },
    {
      name: "subdir2",
      type: "directory",
      contents: [{ name: "file1.txt", type: "file", size: 300 }],
    },
    { name: "file1.txt", type: "file", size: 400 },
  ],
};

function calculateTotalSize(data) {
  if (data.type === "file") return data.size;
  return data.contents.reduce((prev, cur) => prev + calculateTotalSize(cur), 0);
}

const totalSize = calculateTotalSize(data);
console.log(totalSize);
