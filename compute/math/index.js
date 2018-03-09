const express = require("express")
const request = require("request-promise")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json());

app.post("/math", async (req, res, next) => {
  try {
    console.log(req.body)
    var equation = req.body
    var result = equation[0].operand;
    for (var i = 1; i < equation.length; i++) {
      var factors = {
            "factorOne": result,
            "factorTwo": equation[i].operand
          };
      if(equation[i].operator=="+"){
        result = await computePlus(factors)
      }else if(equation[i].operator=="-"){
        result = await computeMinus(factors)
      }else if(equation[i].operator=="*"){
        result = await computeMultiply(factors)
      }else if(equation[i].operator=="/"){
        result = await computeDivide(factors)
      }
    }
    
    res.json(result)
  } catch (error) {
    next(error)
  }
})

const computePlus = async factors => {
  try {
    const result = await request(`${process.env.COMPUTE_PLUS_URL}/plus`, {
      method: 'POST',
      json: true,
      body: {"factorOne":factors.factorOne,"factorTwo":factors.factorTwo}
    })
    return result
  } catch (e) {
    console.log(`failed to compute plus equation ${e}`)
    return result
  }
}

const computeMinus = async factors => {
  try {
    const result = await request(`${process.env.COMPUTE_MINUS_URL}/minus`, {
      method: 'POST',
      json: true,
      body: {"factorOne":factors.factorOne,"factorTwo":factors.factorTwo}
    })
    return result
  } catch (e) {
    console.log(`failed to compute minus equation ${e}`)
    return result
  }
}

const computeMultiply = async factors => {
  try {
    const result = await request(`${process.env.COMPUTE_MULTIPLY_URL}/multiply`, {
      method: 'POST',
      json: true,
      body: {"factorOne":factors.factorOne,"factorTwo":factors.factorTwo}
    })
    return result
  } catch (e) {
    console.log(`failed to compute multiply equation ${e}`)
    return result
  }
}

const computeDivide = async factors => {
  try {
    const result = await request(`${process.env.COMPUTE_DIVIDE_URL}/divide`, {
      method: 'POST',
      json: true,
      body: {"factorOne":factors.factorOne,"factorTwo":factors.factorTwo}
    })
    return result
  } catch (e) {
    console.log(`failed to compute divide equation ${e}`)
    return result
  }
}

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`compute service running on ${port}`)
})