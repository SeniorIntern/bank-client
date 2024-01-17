import Link from "next/link"
import { Text } from "@radix-ui/themes"
import SectionContainer from "./SectionContainer"
import Payment from "./Payment"
import Statement from "./Statement"

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[var(--primary-gray)] flex justify-center">
        <SectionContainer>
          <div className="h-[8vh] flex items-center justify-between">
            <div className="w-fit">
              <p>Mr. Allen Demoskvhi</p>
              <p>Saturday, 09 January 2024</p>
            </div>

            <div className="w-fit flex items-center gap-4">
              <p>Your Balance: <span className="font-bold">￡7,230.11</span></p>
              <p className="font-bold">Allen</p>
              <div
                className="flex items-center justify-center bg-[var(--primary-blue)] w-12 h-12 rounded-full text-white"
              >
                AL
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <div className="w-full flex justify-center">
        <SectionContainer>
          <div className="h-[80vh] flex justify-between gap-16 mt-[4vh]">
            <aside className="flex flex-col gap-2 w-2/12">
              <Link href='/' className="w-full bg-[var(--primary-gray)] p-2">
                <Text>Home</Text>
              </Link>
              <Link href='/login' className="w-full p-2">
                <Text>Log Off</Text>
              </Link>
            </aside>

            <section className="">
              <div
                className="flex gap-8 bg-[var(--secondary-black)] border-t-[4px] border-[var(--primary-blue)] rounded-md"
              >
                <article className="w-3/5 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p>ACCOUNT <span className="blue-text">CLASSIC</span></p>
                    <p>NUMBER <span className="blue-text">0879869</span></p>
                  </div>
                  <Text className="text-[2rem] font-bold">￡7,230.11</Text>
                  <hr />
                  <Text>
                    Switch to us using the Current Account Switch Service, which transfers everything from your previous account in just 7 working days.
                  </Text>
                </article>

                <article className="p-1 flex flex-col h-fit bg-[var(--primary-gray)] grow">
                  <Link href='/' className="bg-[var(--primary-blue)] py-2 px-3">
                    View Statement
                  </Link>
                  <Link href='/' className="py-2 px-3">
                    Make a payment
                  </Link>
                  <Link href='/' className="py-2 px-3">
                    More actions
                  </Link>
                </article>
              </div>

              {
                true &&
                <Statement />
              }

              {
                false &&
                <Payment />
              }
            </section>
          </div>
        </SectionContainer>
      </div>
    </div >
  )
}

export default Dashboard
