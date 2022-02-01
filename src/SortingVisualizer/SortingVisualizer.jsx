import React from "react";
import * as algorithms from '../algorithms/algorithms'
import './SortingVisualizer.css'

const NUMBER_OF_BARS = 100

const ANIMATON_SPEED = 5

export default class SortingVisualizer extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray()
    }

    
    resetArray() {
        const array = []
        const a = 5
        const b = 700
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
            array.push(randomInt(a,b))
        }
        this.setState({array})
    }

    // 
    mergeSort() {
        const animations = algorithms.mergeSort(this.state.array)
        console.log({animations})
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar')
          const isColorChange = i % 3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const color = i % 3 === 0 ? 'red' : 'blue'
            setTimeout(() => {
              barOneStyle.backgroundColor = color
              barTwoStyle.backgroundColor = color
            }, i * ANIMATON_SPEED);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i]
              const barOneStyle = arrayBars[barOneIdx].style
              barOneStyle.height = `${newHeight}px`
            }, i * ANIMATON_SPEED)
          }
        }
      }

    quickSort() {
      const animations = algorithms.quickSort(this.state.array)
      console.log({animations})
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        const isColorChange = i % 3 !== 2
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          const barTwoStyle = arrayBars[barTwoIdx].style
          const color = i % 3 === 0 ? 'red' : 'blue'
          setTimeout(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
          }, i * ANIMATON_SPEED);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            barOneStyle.height = `${newHeight}px`
          }, i * ANIMATON_SPEED)
        }
      }
    }
    

    heapSort() {

    

    }

    bubbleSort() {
        const bubbleSorted = algorithms.bubbleSort(this.state.array)
        console.log({bubbleSorted})
        for (let i = 0; i < bubbleSorted.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = bubbleSorted[i]
              const barOneStyle = arrayBars[barOneIdx].style
              const barTwoStyle = arrayBars[barTwoIdx].style
              const color = i % 3 === 0 ? 'red' : 'blue'
              setTimeout(() => {
                barOneStyle.backgroundColor = color
                barTwoStyle.backgroundColor = color
              }, i * ANIMATON_SPEED);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = bubbleSorted[i]
                const barOneStyle = arrayBars[barOneIdx].style
                barOneStyle.height = `${newHeight}px`
              }, i * ANIMATON_SPEED)
            }
          }

    }

    render() {  
        const {array} = this.state
        return(
            <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" 
                key = {idx}
                style={{height: `${value}px`}}>
                </div>
            ))}
            <button class="button" role="button">
            <button onClick={() => this.resetArray()}> New Array</button>
            <button onClick={() => this.mergeSort()}> Merge Sort</button>
           
            <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
            
            </button>
            <h2>Still working on this project (So probably will never finish it :D) 🚀</h2>
            </div>
            
        )
        
    }

 

}

// returns random int from interval 
const randomInt = (a,b) => {
    return Math.floor(Math.random() * (b-a+1)+a)
}

