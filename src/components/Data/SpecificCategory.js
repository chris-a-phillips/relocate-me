import React from 'react';

const SpecificCategory = ({ info }) => {
  return (
    <div>
      {info.data.map(category => {
        return(
          <div key={category.label}>
            <h4>{category.label}</h4>
              {category.type === 'float' ? category.float_value : null}
              {category.type === 'int' ? category.int_value : null}
              {category.type === 'percent' ? category.percent_value * 100: null}
              {category.type === 'string' ? category.string_value : null}
              {category.type === 'currency_dollar' ? `$${category.currency_dollar_value}` : null}
              {category.type === 'url' ? <a href={category.url_value} target='blank'>{category.url_value}</a> : null}
          </div>
        )
      })}
    </div>
  );
};

export default SpecificCategory;