import {Footer, Header, PageWrapper} from '@/components';
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import {useRef} from 'react';

function CoursePage() {
  const overviewRef = useRef(null);
  const coursesRef = useRef(null);
  const researchRef = useRef(null);
  const lifeRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref && ref.current) {
      const elementTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementTop - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <Header />
      <PageWrapper>
        <Box
          sx={{
            bgcolor: 'primary.main',
            p: 6,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography variant="h3" color={'primary.contrastText'}>
            School of High Altitude Desert Ecology
          </Typography>
        </Box>
        <Box sx={{flex: 1, p: 2}}>
          <Box
            component={'img'}
            src="/hial-web/assets/schools/main.png"
            sx={{
              height: 'auto',
              width: '100%',
              borderRadius: 2
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: {xs: 'column', sm: 'row'},
            bgcolor: '#FCEFEE',
            mx: 2,
            borderRadius: 2,
            p: 2,
            gap: {xs: 2, sm: 8},
            justifyContent: 'space-evenly',
            alignItems: {xs: 'flex-start', sm: 'flex-end'}
          }}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <Typography variant="h6">Course Details : </Typography>
            <Typography variant="body1">
              Mode: <b>In-Person</b>
            </Typography>
            <Typography variant="body1">
              Level: <b>Beginner</b>
            </Typography>
            <Typography variant="body1">
              Venu: <b>HIAL Institute</b>
            </Typography>
            <Typography variant="body1">
              Fees: <b>Rs. 1,00,000</b>
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <Typography variant="body1">
              Duration: <b>6 Months</b>
            </Typography>
            <Typography variant="body1">
              Level: <b>Beginner</b>
            </Typography>
            <Typography variant="body1">
              Venu: <b>HIAL Institute</b>
            </Typography>
            <Typography variant="body1">
              Fees: <b>Rs. 1,00,000</b>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignSelf: 'flex-start'
            }}>
            <Button color="secondary">Apply Now</Button>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            sx={{
              minWidth: '200px',
              padding: 3,
              mt: 2,
              position: 'sticky',
              top: 120,
              height: '320px',
              display: {xs: 'none', md: 'flex'},
              flexDirection: 'column',
              borderRight: '2px solid #00000033'
            }}>
            <Box>
              <List>
                <ListItemButton onClick={() => scrollToSection(overviewRef)}>
                  <ListItemText primary="Overview" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection(coursesRef)}>
                  <ListItemText primary="Courses" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection(researchRef)}>
                  <ListItemText primary="Research & Initiatives" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection(lifeRef)}>
                  <ListItemText primary="Life at SHADE" />
                </ListItemButton>
              </List>
            </Box>
            <Box mt={2}>
              <Button color="secondary">Apply Now</Button>
            </Box>
          </Box>

          <Box flex="1" padding="32px">
            <section ref={overviewRef} style={{paddingBottom: '32px'}}>
              <Typography variant="h4" gutterBottom>
                Overview
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                id feugiat purus. Quisque ut quam tempor, egestas diam et,
                feugiat metus. In id sunt tempor eiusmod. Esse reprehenderit
                occaecat exercitation consectetur cupidatat elit eu
                reprehenderit deserunt est do deserunt. Duis fugiat aliquip
                nostrud anim deserunt Lorem Lorem. Et proident ullamco veniam
                dolor. Occaecat et labore veniam tempor labore.
              </Typography>
            </section>

            <section ref={coursesRef} style={{paddingBottom: '32px'}}>
              <Typography variant="h4" gutterBottom>
                Courses
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pellentesque auctor nisl leo, at hendrerit nibh efficitur nec.
                Quisque tempor, egestas diam et, feugiat metus. Nulla vitae
                vehicula est. Est occaecat culpa quis esse proident enim et
                nostrud. Nostrud consectetur ex anim anim cillum commodo Lorem
                ut voluptate. Do occaecat consectetur non ullamco eiusmod dolore
                ex deserunt. Sunt nisi quis ex duis in proident dolore. Eiusmod
                esse laboris dolore minim aliquip commodo laborum Lorem aute. Ut
                Lorem aute nostrud ex incididunt culpa officia in labore
                reprehenderit Lorem. Consectetur irure culpa labore
                reprehenderit ipsum dolore nisi velit quis in consequat. Ad
                culpa velit adipisicing est. Officia sit amet in ad ipsum
                exercitation est eu adipisicing ipsum. Laboris exercitation ad
                est occaecat eu fugiat deserunt do esse. Dolor non enim non id
                reprehenderit reprehenderit in. Nostrud pariatur nisi cillum est
                do dolor officia duis. Quis officia culpa mollit sunt ullamco
                commodo. Sit officia anim consectetur aute dolore ea minim
                deserunt velit ullamco. Qui commodo eu qui sunt ullamco et
                cillum. Ex dolor exercitation do voluptate. In minim voluptate
                aute elit fugiat duis non est velit adipisicing sunt et dolore.
                Ut ut nulla amet velit. Magna laboris nostrud eiusmod
                consectetur ea. Ipsum do pariatur enim irure do fugiat voluptate
                est labore aliqua minim reprehenderit culpa.
              </Typography>
            </section>

            <section ref={researchRef} style={{paddingBottom: '32px'}}>
              <Typography variant="h4" gutterBottom>
                Research & Initiatives
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Incididunt sunt aute ut in sit qui Lorem voluptate laboris
                aliqua est. Adipisicing aliqua commodo magna cillum consequat
                velit proident proident est velit. Ipsum fugiat ad mollit
                eiusmod. Ea ullamco eiusmod velit tempor. Dolore reprehenderit
                pariatur excepteur id reprehenderit consequat ullamco. Aliquip
                pariatur esse quis aliquip cupidatat consectetur culpa nisi.
                Anim amet mollit id reprehenderit sint pariatur pariatur ut
                nostrud nulla quis. Adipisicing sint deserunt duis est
                adipisicing. Sint ex magna id et do. Do ea commodo et tempor
                culpa exercitation reprehenderit nisi eu amet dolor fugiat
                nulla. Dolor deserunt in est ea quis veniam ad veniam. Eiusmod
                eiusmod minim eiusmod qui nostrud ex consectetur sint. Velit
                occaecat id ullamco sit elit ad aliqua dolor quis. Enim
                voluptate ullamco consequat tempor eiusmod. Mollit non voluptate
                irure ea. Fugiat aliquip pariatur excepteur exercitation nulla
                pariatur consequat elit nulla ut do id. Cupidatat ea esse fugiat
                occaecat culpa proident culpa deserunt culpa non. Eiusmod magna
                culpa deserunt proident id exercitation eu deserunt labore.
                Voluptate esse est est elit. Reprehenderit adipisicing sunt
                aliquip cillum amet cillum officia aliqua culpa esse est. Quis
                proident mollit sit minim enim in adipisicing sunt. Velit
                nostrud dolor duis dolor amet deserunt quis et occaecat sit
                nostrud. Id proident sit aliquip tempor officia et veniam.
                Exercitation officia labore incididunt laborum dolore duis in
                adipisicing. Voluptate enim minim id deserunt sint deserunt
                proident sint. Duis veniam et deserunt excepteur sit anim
                ullamco exercitation ad est magna amet. Labore voluptate labore
                occaecat sunt laborum in laborum esse culpa tempor incididunt
                nostrud magna. Consectetur amet id fugiat anim. Eu mollit
                pariatur ea magna velit duis cillum nisi aliquip aute
                reprehenderit ullamco. Laboris officia tempor mollit sunt do.
                Minim Lorem commodo in nisi ex adipisicing nisi ad. Eu ullamco
                commodo dolor sit eiusmod sint officia consectetur elit dolor
                non dolor. Velit ea nulla excepteur velit in. Officia velit est
                eiusmod magna sint magna nisi excepteur laboris tempor. Mollit
                exercitation deserunt id occaecat commodo culpa excepteur ad.
                Officia id tempor non dolor. Eu sint eiusmod est dolore eu do
                magna. Exercitation laborum Lorem occaecat esse magna sit enim
                exercitation quis incididunt sunt eu ad. Sit proident non
                consequat Lorem do aute aliqua sit excepteur excepteur in
                officia. Nostrud veniam aute ut mollit qui pariatur est et
                culpa. Sint nisi sit cillum nulla ullamco. Reprehenderit officia
                est laboris minim in aliqua. Exercitation non excepteur duis
                adipisicing eiusmod ea et excepteur aute sit elit amet. Veniam
                fugiat deserunt in laborum consectetur.
              </Typography>
            </section>

            <section ref={lifeRef} style={{paddingBottom: '32px'}}>
              <Typography variant="h4" gutterBottom>
                Life at SHADE
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae vehicula est. Pellentesque auctor nisl leo, at hendrerit
                nibh efficitur nec. Mollit fugiat excepteur cupidatat magna sint
                mollit exercitation id. Commodo irure veniam enim deserunt dolor
                ipsum officia do mollit. Ad cillum eu tempor est qui. Cillum
                nisi Lorem dolore fugiat cupidatat ex Lorem qui non. Veniam non
                aliqua reprehenderit velit sit Lorem nulla duis aliqua sit
                aliqua enim et. Amet anim excepteur est reprehenderit do. Ea
                ullamco elit consequat anim mollit eiusmod ex laborum elit.
                Laboris nulla anim eu veniam aliquip laboris veniam voluptate.
                Occaecat fugiat cupidatat nisi voluptate est qui ex aute in aute
                aliquip do. Occaecat officia magna magna exercitation cillum ad
                enim et magna. Laboris ex nisi ipsum irure excepteur ex laborum
                deserunt id aute culpa dolore nulla duis. Enim cupidatat labore
                aliquip commodo sunt laboris adipisicing nostrud deserunt quis
                id. Proident amet adipisicing nisi voluptate Lorem enim dolore
                nostrud cupidatat. Adipisicing nulla aliquip aute voluptate
                veniam aute labore quis proident enim commodo. Laboris aute
                eiusmod Lorem ullamco voluptate cupidatat do commodo ipsum magna
                consectetur exercitation duis aliqua. Ex deserunt ad aliquip
                aute eu est laboris do sit cillum velit adipisicing laboris do.
                Nostrud nulla eiusmod aute veniam velit aute voluptate
                reprehenderit ut minim officia tempor commodo aute. Sit ipsum
                ipsum amet nulla enim dolor duis eu. Consequat incididunt non
                commodo mollit id ea ullamco incididunt aute ut exercitation.
              </Typography>

              <Box mt={2}></Box>
            </section>
          </Box>
        </Box>
      </PageWrapper>
      <Footer />
    </main>
  );
}

export default CoursePage;
