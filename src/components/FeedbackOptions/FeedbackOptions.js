export const FeedbackOptions = ({options}) => {
   return (
      <ul>
         {Object.keys(options).map(name => (
            <li key={name}>
               <button>{name}</button>
            </li>
         ))}
      </ul>
   )
};