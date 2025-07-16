
import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, RotateCcw, Copy, Check } from 'lucide-react';
import { conversionCategories, convertUnit } from '../utils/conversions';

const UnitConverter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const currentCategory = conversionCategories[selectedCategory];

  useEffect(() => {
    if (currentCategory) {
      const units = Object.keys(currentCategory.units);
      setFromUnit(units[0] || '');
      setToUnit(units[1] || units[0] || '');
    }
  }, [selectedCategory, currentCategory]);

  useEffect(() => {
    if (inputValue && fromUnit && toUnit) {
      const result = convertUnit(parseFloat(inputValue), fromUnit, toUnit, selectedCategory);
      setOutputValue(result.toString());
    } else {
      setOutputValue('');
    }
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/[^0-9.-]/g, '');
    setInputValue(numericValue);
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInputValue(outputValue);
  };

  const resetValues = () => {
    setInputValue('');
    setOutputValue('');
  };

  const copyResult = async () => {
    if (outputValue) {
      try {
        await navigator.clipboard.writeText(outputValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  if (!currentCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.entries(conversionCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === key
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 bg-white hover:border-primary hover:bg-primary/5'
              }`}
            >
              <div className="text-center">
                <span className="text-2xl mb-1 block">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conversion Interface */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {currentCategory.name} Converter
          </h2>
          <button
            onClick={resetValues}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="text-sm">Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* From Unit */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="select-field"
              >
                {Object.entries(currentCategory.units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Value
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter value"
                className="input-field text-lg"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-center lg:flex-col lg:justify-center">
            <button
              onClick={swapUnits}
              className="p-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors shadow-lg"
            >
              <ArrowLeftRight className="h-6 w-6" />
            </button>
          </div>

          {/* To Unit */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="select-field"
              >
                {Object.entries(currentCategory.units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={outputValue}
                  readOnly
                  placeholder="Result will appear here"
                  className="input-field text-lg bg-gray-50 pr-12"
                />
                {outputValue && (
                  <button
                    onClick={copyResult}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Result Display */}
        {inputValue && outputValue && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-center text-lg">
              <span className="font-semibold">{inputValue}</span>{' '}
              <span className="text-gray-600">
                {currentCategory.units[fromUnit]?.symbol}
              </span>{' '}
              = <span className="font-semibold text-primary">{outputValue}</span>{' '}
              <span className="text-gray-600">
                {currentCategory.units[toUnit]?.symbol}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Quick Conversions */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Conversions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(currentCategory.units).slice(0, 6).map(([key, unit]) => (
            <button
              key={key}
              onClick={() => {
                setFromUnit(key);
                setInputValue('1');
              }}
              className="p-3 text-left border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="font-medium">{unit.name}</div>
              <div className="text-sm text-gray-500">{unit.symbol}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
