import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './Sortableitem';
import { BiSolidNote } from "react-icons/bi";
import { BsFillPencilFill,
    BsFillCloudSunFill, 
    BsSearchHeartFill, 
    BsFillKeyboardFill,
    BsPersonFill,
    BsFillPatchQuestionFill,
    Bs9CircleFill  } from "react-icons/bs";


      

const DndGrid = ({darkMode, setMedal1, setMedal2, 
        setMedal3, setMedal4, setMedal5, setMedal6, setMedal7}) => {

  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([
  {
    id: 1,
    title: 'Todo List',
    icon: <BsFillPencilFill />,
    color: '#f3bebe',
    text: 'Manage your daily tasks and activities.',
    setMedal: setMedal1,
    cardnum:'one'
  },
  {
    id: 2,
    title: 'Weather',
    icon: <BsFillCloudSunFill />,
    color: '#a987f8',
    text: `Check real-time weather by user's location.`,
    setMedal: setMedal2,
    cardnum:'two'
  },
  {
    id: 3,
    title: 'Wiki Search',
    icon: <BsSearchHeartFill />,
    color: '#d3d0d0',
    text: 'Search engine by using Wikipedia API.',
    setMedal: setMedal3,
    cardnum:'three'
  },
  {
    id: 4,
    title: 'typing Practice',
    icon: <BsFillKeyboardFill />,
    color: '#78b2f4',
    text: 'Practicing your typing.',
    setMedal: setMedal4,
    cardnum:'four'
  },
  {
    id: 5,
    title: 'User Auth',
    icon: <BsPersonFill />,
    color: '#93e7c4',
    text: `Authenticate user's login and registration.`,
    setMedal: setMedal5,
    cardnum:'five'
  },
  {
    id: 6,
    title: 'Slotto',
    icon: <Bs9CircleFill />,
    color: '#dfc67e',
    text: 'Random your lucky numbers.',
    setMedal: setMedal6,
    cardnum:'six'
  },
  {
    id: 7,
    title: 'Sticky Notes',
    icon: <BiSolidNote />,
    color: '#98a1c6',
    text: 'Fullstack Sticky Notes',
    setMedal: setMedal7,
    cardnum:'seven'
  },
]);

    const sensors = useSensors(
     useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSetMedal = (medalId) => {
    switch (medalId) {
      case 1:
        setMedal1(true);
        break;
      case 2:
        setMedal2(true);
        break;
      case 3:
        setMedal3(true);
        break;
      case 4:
        setMedal4(true);
        break;
      case 5:
        setMedal5(true);
        break;
      case 6:
        setMedal6(true)
        break;
      case 7:
        setMedal7(true)
        break;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className='grid_container'>
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} 
            handle={true} 
            value={item.id} 
            title={item.title}
            icon={item.icon}
            color={item.color}
            text={item.text}
            handleSetMedal={handleSetMedal}
            medalId={item.id}
            darkMode={darkMode}
            cardnum={item.cardnum}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <motion.div 
            className='shadow_card' 
              ></motion.div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

export default DndGrid;