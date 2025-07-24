import country from "../models/country";

const countries = [
  'Brazil',
  'Argentina',
  'France',
  'Germany',
  'Spain',
  'England',
  'Portugal',
  'Italy',
  'Netherlands',
  'Belgium',
];

export async function seedCountries() {
  try {
    for (const name of countries) {
      await country.updateOne({ name }, { name }, { upsert: true });
    }
    console.log('✅ Countries seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding countries:', error);
  }
}
