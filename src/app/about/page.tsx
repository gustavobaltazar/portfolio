import Image from "next/image";
export default function About() {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let yearsOld;
  month < 10 ? (yearsOld = year - 2004) : (yearsOld = year - 2003);
  return (
    <div className="mt-12 md:px-[18vw] px-6 ">
      <div className="flex flex-col 2xl:px-72">
        <Image
          className="rounded"
          src={"/einer.jpg"}
          alt="not found"
          layout="responsive"
          width={800}
          height={600}
        />
        <p className="text-[12px] italic opacity-80">
          project einer day with my friends
        </p>

        <h1 className="text-2xl">About me</h1>
        <div className="flex flex-col gap-7 my-10 border-opacity-50 tracking-wide text-sm">
          <p>
            Hello, my name is Gustavo Baltazar A.K.A Balta. I am {yearsOld}{" "}
            years old, at the moment {`i'm`} working at{" "}
            <a
              href="https://www.bosch.com/"
              className="border-b-2 hover:opacity-30 transition-all"
            >
              Bosch GmbH
            </a>{" "}
            as a Technicion of Digital Solutions - Junior.{" "}
          </p>
          <p>I still live my grandma and pets. 2 dogs and 1 cat</p>
          <p>
            My hobbies are play on-line games (
            <a
              href="https://steamcommunity.com/profiles/76561198255772508/"
              className="border-b-2 hover:opacity-30 transition-all"
            >
              steam
            </a>
            ) ,{" "}
            <a
              href="https://anilist.co/user/sagl/"
              className="border-b-2 hover:opacity-30 transition-all"
            >
              watch anime
            </a>{" "}
            and play guitar.
          </p>

          <p className=" italic opacity-80">
            I like traveling as well, i would love to visit Japan more
            specifically Tokyo.
          </p>
        </div>
      </div>
    </div>
  );
}
``;
