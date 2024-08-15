import { Link } from "react-router-dom"
import { BannerSlider, CategorySlider, Title, MealSlider} from "../../components/common"
import { dishTypeData } from "../../data"
import { pattern_one } from "../../utils/images"

const HomePage = () => {
  return (
    <main className="home-page custom-min-h pt-[4px]">
      <BannerSlider />
      <section className="categories" style={{
        background: `url('${pattern_one}') center/cover no-repeat`
      }}>
        <div className="container">
          <Title subTitle="Choose a Category" mainTitle="Recipe Categories" />
        </div>
        <CategorySlider />

      </section>

      <section className="showcase-recipes">
        <div className="container">
          <Title subTitle="Some Recipes" mainTitle="Chicken Recipes" />
          {/* recipes list */}
        </div>
      </section>

      <section className="dishes">
        <div className="container">
          <Title subTitle="Find Dishes you love" mainTitle="Recipe Dishes"/>
          <div className="dishes-list">
            {
              dishTypeData?.map((dish, idx) => (
                <Link key={idx} to={`recipes/dish/${dish?.type}`} className="dishes-item">
                  <img src={dish.image} />
                  <p className="dishes-item-name">{dish.type}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </section>

      <section className="meals">
        <div className="container">
          <Title subTitle="Get Meal Ready" mainTitle="Recipe Meals"/>
          <MealSlider/>
        </div>
      </section>
    </main>
  )
}

export default HomePage