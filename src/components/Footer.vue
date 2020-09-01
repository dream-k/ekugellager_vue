<template>
  <!-- Footer -->
  <mdb-footer color="mdb-color" class="font-small lighten-3 pt-4 mt-4">
    <mdb-container class="text-center text-md-left footer-container">
      <mdb-row class="my-4">
        <mdb-col md="2" lg="2">
          <img class="logo img-responsive" src="../assets/logo.jpg"/>
          <h5 class="font-weight-bold">Kontakt</h5>
          <p>+49 (0)234 5450120</p>
          <a href="mailto:" class="email-contact">info@ekugellager.de</a>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="ml-auto">
          <h5 class="text-uppercase mb-4 font-weight-bold">Products</h5>
          <ul class="list-unstyled">
            <p><a href="#!">Über uns</a></p>
            <p><a href="#!">Versandprozess</a></p>
            <p><a href="#!">Qualitätsversprechen</a></p>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2">
          <h5 class="text-uppercase mb-4 font-weight-bold">Information</h5>
          <p><a href="#!">Rabattstufen</a></p>
          <p><a href="#!"> Qualitätsstufen</a></p>
          <p><a href="#!">Staffelpreise</a></p>
          <p><a href="#!">Persona Erklärung</a></p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2">
          <h5 class="text-uppercase mb-4 font-weight-bold">Rechtliches</h5>
          <p><a href="#!">About Us</a></p>
          <p><a href="#!"> Delivery Information</a></p>
          <p><a href="#!">Returns</a></p>
          <p><a href="#!">Privacy & Policy</a></p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2">
          <h5 class="text-uppercase mb-4 font-weight-bold">Kundenservice</h5>
          <p><a href="#!">Retouren</a></p>
          <p><a href="#!"> Faq</a></p>
          <p><a href="#!">Size Charts</a></p>
          <p><a href="#!">Cookie Preferences</a></p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="text-center">
          <h5 class="text-uppercase mb-4 font-weight-bold">Shipment & Payment</h5>
          <div class="mt-2 ">
            <ul class="list-unstyled shipping">
              <p><img src="../assets/images/visa.png"></p>
              <p><img src="../assets/images/mastercard.png"></p>
              <p><img src="../assets/images/paypal.png"></p>
              <p><img src="../assets/images/sepa.png"></p>
              <p><img src="../assets/images/invoice_alternate.png"></p>
            </ul>
          </div>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
          All Rights Reserved &copy; 2020
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>
