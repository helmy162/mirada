import { useState } from 'react'
import Popup from '../popup/popup'
import { Link } from 'react-router-dom'

const Terms = () => {
  const [isTermsOpen, setisTermsOpen] = useState(false)
  const [isPrivacyPolicy, setisPrivacyPolicy] = useState(false)
  return (
    <div className='terms dont-have' style={{ fontFamily: 'Calibre' }}>
      By signing up you agree to Hoopoe's{' '}
      <a
        style={{
          color: '#0087c7',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
        onClick={e => setisTermsOpen(!isTermsOpen)}
      >
        Terms & Conditions
      </a>{' '}
      and{' '}
      <a
        style={{
          color: '#0087c7',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
        onClick={e => setisPrivacyPolicy(!isPrivacyPolicy)}
      >
        Privacy Policy
      </a>
      {isTermsOpen && (
        <Popup
          content={
            <>
              <div className='popup-bold'> Terms & Conditions</div>
              <div className='popup-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                sunt doloremque soluta dolor laudantium praesentium quasi ex nam
                consectetur itaque, neque porro unde accusamus impedit beatae
                sit autem laboriosam maxime.
              </div>
              <div className='popup-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                sunt doloremque soluta dolor laudantium praesentium quasi ex nam
                consectetur itaque, neque porro unde accusamus impedit beatae
                sit autem laboriosam maxime.
              </div>
              <button
                className='btn-login popup-btn'
                onClick={e => setisTermsOpen(!isTermsOpen)}
              >
                {' '}
                Back to Signup
              </button>
            </>
          }
          handleClose={e => setisTermsOpen(!isTermsOpen)}
        />
      )}
      {isPrivacyPolicy && (
        <Popup
          content={
            <>
              <div className='popup-bold'> Privacy Policy</div>
              <div className='popup-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero magnam voluptatum tempora dolore fugit aperiam quaerat sunt commodi quos, delectus sapiente voluptates enim, dolores quas, aliquid porro reprehenderit ab perferendis? Nam ipsa, doloribus eaque a quibusdam omnis at? Officia sunt facilis reiciendis quia. Voluptatibus, tempora perferendis. Soluta ullam, dolores, perferendis aut ducimus dolore esse nesciunt necessitatibus laboriosam inventore provident itaque doloribus quasi, ad iste? Vero quod necessitatibus assumenda maiores! Voluptatibus praesentium cum architecto quo laboriosam sequi veniam dolore? Dolor eligendi aperiam distinctio ipsam mollitia fugiat perspiciatis aliquid tempora, dicta odio quis quibusdam quaerat praesentium. Id quaerat nesciunt nam ratione veniam quam reprehenderit illum quis? Ipsa consectetur, maxime omnis, accusamus, aliquam aperiam quas cum porro quod quo sint quibusdam temporibus esse dicta veniam ullam repellendus. Libero, saepe! Dolorum, at. Velit, cupiditate nostrum amet quibusdam exercitationem recusandae officiis nisi impedit. Vitae a cumque natus et iusto possimus earum harum fuga blanditiis at tenetur laudantium consectetur magnam, sint eveniet accusamus, adipisci aliquid corrupti repellendus eum nesciunt ratione. Accusamus debitis quam est vero! Cum odio maiores tenetur aspernatur. Impedit at itaque nam minima suscipit dolorem adipisci delectus facere mollitia magni vel ea ipsum aliquid placeat iure facilis quia, nemo distinctio consequuntur reprehenderit! Maxime esse reprehenderit nulla, unde corrupti laborum soluta amet reiciendis repellendus, mollitia quisquam error ullam iusto quod architecto temporibus animi, quos nobis expedita aspernatur ipsum iste sequi? Magni labore alias distinctio, aperiam architecto amet blanditiis iure corporis illo, quidem nam fuga delectus dolores voluptate explicabo recusandae ea non dignissimos quod voluptas quibusdam vitae doloribus! Quibusdam cupiditate vitae dicta voluptatem. Maxime explicabo veniam dolorum deserunt aliquam, suscipit sit. Aut doloremque commodi corporis eaque aliquam exercitationem tenetur fugit ad eos voluptas eligendi dolorem, itaque odio rem nemo! Harum nulla ullam esse! Quaerat ullam mollitia consequatur iure eligendi numquam debitis maxime repellat sint incidunt error neque, harum minus exercitationem, a quibusdam in deleniti obcaecati repellendus nemo? Quo sequi est, vel laboriosam sed hic aliquam quis id sapiente? Fugiat architecto quis magnam, accusantium, sed, assumenda harum saepe vitae obcaecati asperiores maxime eaque illo at. Cum, dignissimos itaque! Magni ex aperiam eaque consectetur perferendis beatae tenetur! Dolorem error at sit harum nostrum possimus minima ex ipsum maiores totam, sapiente nesciunt. Repellat mollitia eligendi nobis exercitationem quia rerum. Facilis iste praesentium, hic nulla officiis eaque quae natus repellat iusto eligendi, voluptates esse corrupti obcaecati reiciendis dolore et doloremque sapiente commodi magnam eveniet minus ex qui aspernatur rerum! Repellendus doloribus recusandae, odio fuga natus perferendis consequuntur dolore vel quod! Iste quia corrupti, omnis mollitia maxime sequi dolore voluptate labore consequatur doloremque magnam laudantium, ratione impedit recusandae eligendi quam eos? Nulla quidem quae molestiae alias excepturi nesciunt nemo, velit, consectetur corrupti perferendis iure. Tenetur necessitatibus porro repudiandae? Repellat, molestiae in voluptatem sed maxime esse hic explicabo adipisci id totam repellendus, magnam rem incidunt quae accusamus ducimus quas nostrum eveniet est cumque fugit libero aperiam! Eligendi repellendus suscipit neque pariatur, repudiandae vero voluptatem ex iusto sit illo voluptatum dolor quos laboriosam eaque aperiam tempora dignissimos corrupti molestiae, inventore enim, quasi facere in quae aliquid? Voluptas quidem explicabo dignissimos labore repellat ipsa, corporis sint excepturi dolorum repudiandae, consectetur iste laboriosam dolores illo est placeat accusamus nulla quisquam culpa? Omnis, cumque voluptate. Possimus ab quas quisquam animi quis architecto qui iusto facere cupiditate numquam, corrupti dolorum ipsam magni, ducimus cumque temporibus iste. Neque optio, ad cum consequuntur esse hic vitae nam quos molestiae quo qui eaque? Ipsa necessitatibus et repudiandae nobis eaque facilis saepe ut reprehenderit minima culpa? Veniam ullam natus voluptas. Tempora sequi numquam, quam velit rerum distinctio quos cupiditate accusantium molestias voluptas deserunt doloremque minima tempore vero ullam, modi dolore quisquam unde quas itaque, ipsa porro molestiae nemo! Perspiciatis ipsa sed, impedit dolor dolores itaque quo labore pariatur nam mollitia rerum. Odit doloribus minima distinctio repellendus ea ratione at, consectetur debitis fugiat quisquam, ipsum excepturi iure amet adipisci autem sunt pariatur quam saepe, maiores quo fuga doloremque! Libero quam error similique, exercitationem odit omnis modi iusto praesentium quisquam aut! Nostrum, eius sunt! Quasi eius architecto error est maiores deleniti provident doloremque perferendis quod nihil voluptas, eligendi vel iste amet repellendus dicta maxime a quam aperiam molestias? Ipsa eaque, atque et dolorum porro, magni enim quod cumque odit voluptate autem dolore voluptatum ipsam velit ut ullam! Harum corporis aspernatur facere doloremque. Quis mollitia asperiores error minus possimus esse aperiam iusto debitis. Incidunt vero natus possimus fugiat asperiores. Tenetur, consequatur nostrum alias consequuntur ad labore sint impedit unde laborum deleniti pariatur perferendis odit, accusantium maiores molestias inventore possimus id vitae dicta nulla adipisci asperiores minima reprehenderit? Explicabo repudiandae accusantium maiores alias earum sequi aut ab impedit nemo tempora magnam eos repellat possimus ipsam similique suscipit ipsum architecto sunt perferendis aspernatur, voluptatem dolorem laboriosam consequuntur. Quas rerum id porro amet sint minus debitis nulla doloremque dolores deleniti in iusto impedit adipisci minima culpa voluptatum temporibus suscipit quam soluta delectus aliquam dolor, voluptates esse dicta. Itaque perferendis dicta quidem voluptate explicabo perspiciatis sit qui pariatur ducimus aut temporibus magnam impedit, esse reprehenderit, unde labore enim tempore exercitationem quisquam velit deserunt officia odio. Numquam eveniet eum laudantium obcaecati. Quos vero fugit eius blanditiis maiores veniam et nobis illum aperiam voluptatibus nostrum vel aut odio iusto dolore harum ullam, quam expedita sequi natus quo pariatur debitis. Inventore quo quod fuga placeat vero ex dolores eius, ipsum hic nisi provident similique reprehenderit dicta eveniet odio harum ipsa consequuntur iure dolorum repellat dolore praesentium molestias dolor. Veritatis quis fugiat voluptate necessitatibus aspernatur ipsam blanditiis animi asperiores suscipit mollitia incidunt iusto amet, assumenda, voluptas ut inventore minima possimus, unde corrupti iste! Aspernatur a rem, reiciendis labore ducimus corporis eveniet ipsum dolore commodi debitis tenetur dolor consequatur sequi dignissimos similique magni nihil voluptatibus tempora at esse rerum alias, facilis tempore. Impedit autem, laudantium architecto nam necessitatibus reiciendis temporibus ex illum assumenda vitae quis dolorem, ducimus blanditiis totam quae suscipit ut ipsam repudiandae quibusdam animi commodi, expedita eum excepturi. Esse ipsa necessitatibus velit labore ullam consequatur culpa, magnam at repudiandae, quisquam quidem natus nemo commodi itaque quis rerum obcaecati excepturi animi. Reprehenderit.
              </div>
              <button
                className='btn-login popup-btn'
                onClick={e => setisPrivacyPolicy(!isPrivacyPolicy)}
              >
                {' '}
                Back to Signup
              </button>
            </>
          }
          handleClose={e => setisPrivacyPolicy(!isPrivacyPolicy)}
        />
      )}
    </div>
  )
}

export default Terms
