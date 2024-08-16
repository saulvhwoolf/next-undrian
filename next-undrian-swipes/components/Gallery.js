// File: src/components/Gallery.js
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Gallery.module.css'

const GRID_SIZE = 5
const PANEL_SIZE = 100 // px
const DRAG_LIMIT = PANEL_SIZE
const THRESHOLD = PANEL_SIZE / 8 // 1/8 panel threshold
const RESOLUTION_THRESHOLD = PANEL_SIZE * 0.75 // 3/4 panel threshold for resolution

export default function Gallery() {
    const [panels, setPanels] = useState([])
    const [dragCenter, setDragCenter] = useState({x: 0, y :0})
    const [dragStart, setDragStart] = useState(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [dragDirection, setDragDirection] = useState(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [transitionOffset, setTransitionOffset] = useState({ x: 0, y: 0 })
    const galleryRef = useRef(null)

    useEffect(() => {
        const initialPanels = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => ({
            id: i,
            content: determineContent(i)
        }))
        setPanels(initialPanels)
    }, [])

    const determineContent = useCallback((id) => {
        return `Panel ${id}`
    }, [])

    const handleDragStart = (e) => {
        e.preventDefault()
        setDragStart({ x: e.clientX, y: e.clientY })
        setDragDirection(null)
    }

    const handleDrag = (e) => {
        if (!dragStart || isTransitioning) return

        let dx = e.clientX - dragStart.x
        let dy = e.clientY - dragStart.y

        if (!dragDirection) {
            // If we're in the center area, determine the drag direction
            if (Math.abs(dx - dragCenter.x) > THRESHOLD) {
                setDragDirection(dx > 0 ? 'right' : 'left')
            } else if (Math.abs(dy - dragCenter.y) > THRESHOLD) {
                setDragDirection(dy > 0 ? 'down' : 'up')
            }
        } else {
            // If we already have a drag direction, constrain movement to that direction
            switch (dragDirection) {
                case 'left':
                    dx = Math.min(0, Math.max(dx, -DRAG_LIMIT))
                    dy = 0
                    break
                case 'right':
                    dx = Math.max(0, Math.min(dx, DRAG_LIMIT))
                    dy = 0
                    break
                case 'up':
                    dx = 0
                    dy = Math.min(0, Math.max(dy, -DRAG_LIMIT))
                    break
                case 'down':
                    dx = 0
                    dy = Math.max(0, Math.min(dy, DRAG_LIMIT))
                    break
            }

            // Check if we've returned to the center area
            if (Math.abs(dx - dragCenter.x) <= THRESHOLD && Math.abs(dy - dragCenter.y) <= THRESHOLD) {
                setDragDirection(null)
            }

            // Check if we've passed the resolution threshold
            if (Math.abs(dx - dragCenter.x) > RESOLUTION_THRESHOLD || Math.abs(dy - dragCenter.y) > RESOLUTION_THRESHOLD) {
                resolveDrag(dragDirection, { x: dx, y: dy })
                return
            }
        }

        setOffset({ x: dx, y: dy })
    }

    const handleDragEnd = () => {
        if (!dragStart || isTransitioning) return

        setDragStart(null)
        setOffset({ x: offset.x, y: offset.y })
        setDragDirection(null)
    }

    const resolveDrag = (direction, currentOffset) => {
        setIsTransitioning(true)

        // Set the transition offset to create the sliding effect
        // setDragCenter((c) => { return {
        //     x: direction === 'left' ? (c.x - PANEL_SIZE) : direction === 'right' ? (c.x + PANEL_SIZE) : c.x,
        //     y: direction === 'up' ? (c.y - PANEL_SIZE) : direction === 'down' ? (c.y + PANEL_SIZE) : c.y
        // }})
        setTransitionOffset({
            x: direction === 'left' ? -PANEL_SIZE : direction === 'right' ? PANEL_SIZE : 0,
            y: direction === 'up' ? -PANEL_SIZE : direction === 'down' ? PANEL_SIZE : 0
        })

        setOffset({ x: dragCenter.x + transitionOffset.x, y: dragCenter.y + transitionOffset.y })
        setDragStart(null)
        setDragDirection(null)

        // Smooth transition to center the new panel
        setTimeout(() => {
            updatePanels(direction)
            setIsTransitioning(false)
            setTransitionOffset({ x: 0, y: 0 })
        }, 1000) // This should match the transition duration in CSS
    }

    const updatePanels = (direction) => {
        setPanels(prevPanels => {
            const newPanels = [...prevPanels]
            let newIds = []
            newIds = newPanels.map(p => (p.id ) % (GRID_SIZE * GRID_SIZE))

            switch (direction) {
                // case 'left':
                //     newIds = newPanels.map(p => (p.id + 1) % (GRID_SIZE * GRID_SIZE))
                //     for (let i = GRID_SIZE - 1; i < GRID_SIZE * GRID_SIZE; i += GRID_SIZE) {
                //         newIds[i] = GRID_SIZE * GRID_SIZE + i / GRID_SIZE
                //     }
                //     break
                // case 'right':
                //     newIds = newPanels.map(p => (p.id - 1 + GRID_SIZE * GRID_SIZE) % (GRID_SIZE * GRID_SIZE))
                //     for (let i = 0; i < GRID_SIZE * GRID_SIZE; i += GRID_SIZE) {
                //         newIds[i] = GRID_SIZE * GRID_SIZE + i / GRID_SIZE
                //     }
                //     break
                // case 'up':
                //     newIds = newPanels.map(p => (p.id + GRID_SIZE) % (GRID_SIZE * GRID_SIZE))
                //     for (let i = GRID_SIZE * (GRID_SIZE - 1); i < GRID_SIZE * GRID_SIZE; i++) {
                //         newIds[i] = GRID_SIZE * GRID_SIZE + i % GRID_SIZE
                //     }
                //     break
                // case 'down':
                //     newIds = newPanels.map(p => (p.id - GRID_SIZE + GRID_SIZE * GRID_SIZE) % (GRID_SIZE * GRID_SIZE))
                //     for (let i = 0; i < GRID_SIZE; i++) {
                //         newIds[i] = GRID_SIZE * GRID_SIZE + i
                //     }
                //     break
            }

            // Here you would call your callback function to adjust panels
            // For example: adjustPanelsCallback(newIds, direction);

            return newIds.map(id => ({
                id,
                content: determineContent(id)
            }))
        })
    }

    return (
        <div className={styles.container}>
            <div
                ref={galleryRef}
                className={styles.gallery}
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                style={{
                    transform: `translate(${offset.x + transitionOffset.x}px, ${offset.y + transitionOffset.y}px)`,
                    transition: isTransitioning ? 'transform 0.3s ease-out' : 'none',
                    borderColor: dragStart != null ? "black" : "red"
                }}
            >
                {panels.map(panel => (
                    <div key={panel.id} className={styles.panel}>
                        {panel.content}
                    </div>
                ))}
            </div>
            <div className={styles.viewport}></div>
        </div>
    )
}
