function Themes() {
  return (
    <>
      <div class="center-hv">
        <h1>Themes</h1>
        <div class="theme-container">
          <div class="card">
            <img
              class="card-img"
              src="https://i.ibb.co/dD1qyz8/dumbledore.jpg"
              alt=""
            />
            <div class="card-content">
              <h4>The Albus Dumbledore quiz</h4>
              <p>
                Wingardium Leviousa your way to the quiz that tests your
                knowledge on the wizarding world!
              </p>
              <button class="btn btn-primary modalBtn">Start now</button>
            </div>
          </div>

          <div class="card">
            <img
              class="card-img"
              src="https://i.ibb.co/3m7W8nd/bahubali.jpg"
              alt=""
            />
            <div class="card-content">
              <h4>The BahuBali quiz</h4>
              <p>
                Wingardium Leviousa your way to the quiz that tests your
                knowledge on the wizarding world!
              </p>
              <button class="btn btn-primary modalBtn">Start now</button>
            </div>
          </div>
        </div>
      </div>

      <div class="show-modal modal" id="modal">
        <div class="modal-body">
          <h2>You must abide by some rules prescribed below</h2>
          <div class="model-text-left">
            <p>1. Quiz can only be attempted once</p>
            <p>2. You cannot revert back before completing the entire quiz.</p>
            <p>
              3. If any malpractice is noticed, you'll be banned from our
              servers.
            </p>
          </div>

          <div class="btn-block">
            <button class="btn btn-primary">
              <a href="#"> Start the quiz?</a>
            </button>
            <button class="btn result-incorrect" id="closeModal">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Themes };
