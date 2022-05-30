class WindowsData {
  constructor(windowsMany) {
    this.windowsMany = windowsMany;
  }

  pushMany(windowsMany) {
    this.windowsMany = this.windowsMany.concat(windowsMany);
  }

  pushOne(windowOne) {
    this.windowsMany.push(windowOne);
  }

  getOne(_id) {
    return this.windowsMany.find((element) => element._id === _id);
  }
}

const myArray = [
  {
    _id: "woodproId",
    title: { firstPart: "Гардеробное наполнение", secondPart: "WOODPRO" },
    des: "(Описание...)",
    img: "/i1.jpg",
    windows: [
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
      "/i1.jpg",
    ],
  },
  {
    _id: "dresscodeId",
    title: { firstPart: "Гардеробное наполнение", secondPart: "DRESSCODE" },
    des: "(Описание...)",
    img: "/i2.jpg",
    windows: [
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
      "/i2.jpg",
    ],
  },
];

export default new WindowsData(myArray);
