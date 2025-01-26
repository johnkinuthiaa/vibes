import React, { useState } from 'react';

const DraggableComponent = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const playerStyle = {
        position: 'absolute',
        top: position.y + "px",
        left: position.x + "px",
        width: '200px',
        height: '100px',
        backgroundColor: 'lightgray',
        borderRadius: '10px',
        cursor: 'move',
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={`h-[650px] bg-[whitesmoke] rounded-2xl flex flex-col gap-4 fixed z-[999]`}
            style={playerStyle}
            onMouseDown={handleMouseDown}
        >
            <p>Drag me around!</p>
        </div>
    );
};

export default DraggableComponent;