import { useState } from 'react'

//TODO: use debounce
const ThemeSelector: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0)

  const handleSliderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(+e.target.value)
  }

  return (
    <div className="flex flex-col justify-center px-6 py-4">
      <div className="h-44"></div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={sliderValue}
        list="markers"
        onChange={handleSliderOnChange}
      />
      <datalist id="markers">
        <option value="0" />
        <option value="1" />
      </datalist>
    </div>
  )
}

export default ThemeSelector
