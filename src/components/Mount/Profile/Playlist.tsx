import { createThemeContext } from '@/Context/context'
import React from 'react'
import { motion } from 'motion/react'

const Playlist = () => {
  const { LightTheme, ShowPlaylist } = createThemeContext()
  return (
    <motion.div
      className={`${
        LightTheme
          ? 'text-black bg-white border-black/30 border-[0.2px]'
          : 'text-white bg-black border-white/30 border-[0.2px]'
      } w-full rounded-xl overflow-hidden`}
      initial={false} // important so it doesn’t animate on first render
      animate={{
        maxHeight: ShowPlaylist ? '45vh' : '0vh',
        opacity: ShowPlaylist ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: 'circInOut' }}
    >
      <div className='m-2 p-5 overflow-y-auto max-h-[40vh] scroll_bar_ scroll_bar_thumb'>
        yeppi playlist yeppi playlist yeppi playlist yeppi playlist yeppi
        playlist yeppi playlist yeppi playlist yeppi playlistyeppi playlist
        yeppi playlist yeppi playlist yeppi playlist yeppi playlist yeppi
        playlist yeppi playlist yeppi playlist yeppi playlist yeppi playlist
        yeppi playlistyeppi playlistyeppi playlistyeppi playlistyeppi
        playlistyeppi playlistyeppi playlist yeppi playlist Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Illo minus corrupti officiis
        voluptates itaque eveniet nobis unde nulla, eos optio, ducimus, corporis
        aspernatur! Quasi explicabo fuga, iure voluptas ullam veniam quae,
        temporibus aperiam accusantium molestias, necessitatibus commodi impedit
        totam ab hic! Iste quod sit vitae inventore molestias veniam officiis
        corrupti, saepe blanditiis sunt reprehenderit facilis, qui illum,
        doloribus aspernatur temporibus consequatur asperiores! Maxime totam
        fugiat nam. Commodi culpa nesciunt earum beatae ducimus repellendus
        maxime corrupti molestias sequi et? Libero nisi repellat iusto, corrupti
        quis, dolorem, aspernatur dolor incidunt blanditiis sint cupiditate
        laboriosam id eius ipsa dolore deleniti pariatur sequi iure saepe odio
        nobis provident odit esse! Minima mollitia, porro, nisi nulla temporibus
        inventore error commodi ex laudantium iure hic corrupti, eligendi alias
        dicta at earum quia quo! Cum eos id, sed doloremque numquam alias, velit
        labore minus quas accusantium sit nobis et expedita animi tempore sint.
        Autem ut praesentium facere odio rerum vel est maxime veniam ducimus
        animi. Inventore odit aut voluptates voluptate molestiae voluptatibus
        iure vitae eius delectus, amet tenetur, labore dolorem facilis saepe
        similique eum quo, hic ab tempora debitis. Ullam id veritatis maxime ex
        eaque blanditiis in consequuntur soluta! Expedita necessitatibus odit
        culpa, dicta fugit itaque fugiat eos dignissimos, eaque eius minus quis
        ab, doloremque placeat adipisci atque quod perferendis debitis ipsum
        praesentium magni beatae est sequi. Recusandae tempore sed doloremque,
        perspiciatis facere magni fuga similique asperiores dolore, debitis
        harum cupiditate aliquid id nostrum, quas error beatae! Voluptate,
        consequatur repellendus explicabo delectus facilis cum quibusdam sit
        sunt, similique ipsum vero aperiam, quos dolor dolore adipisci
        exercitationem deserunt minus velit neque eos voluptatibus. Libero alias
        placeat tempora enim praesentium, necessitatibus, saepe, dolor
        repudiandae ut magnam maiores perspiciatis assumenda deserunt deleniti
        odio repellendus ea accusamus fugiat? Odio, maiores! Nam nemo modi,
        distinctio iure porro ut unde facere tempore aliquid officiis,
        accusantium maxime deserunt ex fuga debitis incidunt dolorem culpa autem
        eveniet ullam earum perferendis sunt! Libero eos optio atque illum non
        adipisci, similique sint sapiente minima at. In quasi culpa sapiente
        ipsa quia quo corporis non veniam. Et soluta tempore doloremque ut quod
        ex alias placeat nam, voluptatem ducimus.
      </div>
    </motion.div>
  )
}

export default React.memo(Playlist)
