const CategoryForm = () => {
   return (
      <form>
         <h2>Add Category :</h2>
         <div>
            <input
               type="text"
               placeholder="category title..."
            />
            <div>
               <button>Cancel</button>
               <button type="submit">Add</button>
            </div>
         </div>
      </form>
   );
};

export default CategoryForm;
