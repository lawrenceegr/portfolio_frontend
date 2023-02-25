import React, { useState } from "react";

const items = [
  { id: 1, text: "Where can I get some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", category: "A", completion:"Ongoing" },
  { id: 2, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", category: "B", completion:"Completed" },
];

const ItemDisplay = ({ item }) => {
  return <div className="p-4 ">
     <div className="flex w-2/3 h-[250px] sm:w-full bg-gray-500 text-white rounded-xl lg:flex-col">
            {/* <img  src="" alt="" className='h-full w-1/3 rounded-l-lg'/> */}
            <div className='flex flex-col'>
              <p className="text-md pl-4 text-start">
                {item.text}
              </p>
              <div className="text-gray-300 p-2"><h3  >Completion status: <span className='text-black bg-slate-300 rounded-md p-1'>{item.completion}</span></h3></div>
            </div>
        </div>
    </div>;
};

const SideNav = ({ selectedCategory, onClick }) => {
  return (
    <div className="flex flex-col">
      {["A", "B"].map(category => (
        <button
          key={category}
          className={`p-2 ${
            selectedCategory === category ? "bg-blue-500 w-20 rounded-lg text-white" : ""
          }`}
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Socials = () => {
  const [selectedCategory, setSelectedCategory] = useState("A");
  const selectedItems = items.filter(item => item.category === selectedCategory);

  return (
    <>
      <p className="text-4xl pl-6 text-start text-orange-500 font-bold mb-4">Work and Contracts</p>
    <div className="flex">
      <SideNav selectedCategory={selectedCategory} onClick={setSelectedCategory} />
      <div className="flex-1 text-start">
        {selectedItems.map(item => (
          <ItemDisplay key={item.id} item={item} completion={item.completion}/>
          ))}
      </div>
    </div>
    </>
  );
};

export default Socials;
