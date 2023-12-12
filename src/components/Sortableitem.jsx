import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';

const SortableItem = ({cardnum, darkMode, title, id, icon, 
    color, text, handleSetMedal, medalId,

  }) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
    zIndex: isDragging ? '100' : '20',
    opacity: isDragging ? 0.6 : 1,
  };


  return (
    <div 
    className={`card_grid ${darkMode ? '' : `${cardnum} dark`}`}
        ref={setNodeRef} 
        {...attributes}
        {...listeners}
        style={style} 
        >
          <motion.div 
          className="icon_grid">
            <span>{icon}</span>
          </motion.div>
          <div className='grid_text' onClick={() => handleSetMedal(medalId)}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
    </div >
  );
};

export default SortableItem;