import React from "react";
import { DatePicker, Select, Form, Button, Input } from "antd";

const { Option } = Select;

const FormFilters = props => {
  const { handleChange, classFilterValues, regionFilterValues } = props;

  const handleChangeTime = (name, date, dateString) => {
    handleChange({ name, value: date });
  };

  const [handleETAChangeTime, handleETDChangeTime] = ["ETA", "ETD"].map(name =>
    handleChangeTime.bind(null, name)
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleInnerChange = (type, value) => {
    handleChange({ type, value });
  };

  const [handleClassChange, handleRegionChange] = ['featureclass', 'region'].map(fnType => handleInnerChange.bind(null, fnType))
  
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Select allowClear placeholder="feature class" name="classFeatured" onChange={handleClassChange}>
          {
            classFilterValues.map((classValue, index) => (
              <Option value={classValue} key={index}>{classValue}</Option>
            ))
          }
        </Select>
        
        <Select allowClear placeholder="region" name="region" onChange={handleRegionChange}>
          {
            regionFilterValues.map((regionValue, index) => (
              <Option value={regionValue} key={index}>{regionValue}</Option>
            ))
          }
        </Select>
        
        <DatePicker onChange={handleETAChangeTime} placeholder="ETA" />
        <DatePicker onChange={handleETDChangeTime} placeholder="ETD" />
      </Form.Item>
    </Form>
  );
};

export default FormFilters;
