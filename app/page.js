import ButtonPimp from "./components/buttonPimp/ButtonPimp";

export default function Home() {
  return (
    <main className="m-10 mt-24">
      <h1 className="text-5xl text-center font-semibold">
        Welcome to <span className="text-purple-700 font-bold">Pimp</span> my
        Button 😎
      </h1>
      <ButtonPimp />
    </main>
  );
}
